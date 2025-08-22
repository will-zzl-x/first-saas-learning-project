// an API endpoint to create a new Post document in the databse. route is not protected by auth middleware, so anyone can create a new post. The route expects a POST request with a title and description in the request body. The boardId is in the query parameters. The userID field is populated with the user's ID if they are logged in.
import { NextResponse } from "next/server";
import { Filter } from "bad-words";
import connectMongo from "@/libs/mongoose";
import Post from "@/models/Post";
import User from "@/models/User";
import { auth } from "@/auth";

export async function POST(req) {
  try {
    const body = await req.json();
    const { title, description } = body;
    // URLSearchParams
    const { searchParams } = req.nextUrl;
    const boardId = searchParams.get("boardId");

    const badWordsFilter = new Filter();
    const sanitizedTitle = badWordsFilter.clean(title);
    const sanitizedDescription = badWordsFilter.clean(description);

    if (!sanitizedTitle) {
      return NextResponse.json({ error: "Title is required" }, { status: 400 });
    }
    const session = await auth();
    await connectMongo();
    const post = await Post.create({
      title: sanitizedTitle,
      description: sanitizedDescription || undefined, // optional field
      boardId,
      userId: session?.user?.id,
    });

    return NextResponse.json(post);
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = req.nextUrl;
    const postId = searchParams.get("postId");

    if (!postId) {
      return NextResponse.json(
        { error: "Post ID is required" },
        { status: 400 }
      );
    }
    await connectMongo();
    const post = await Post.findById(postId);
    const user = await User.findById(session.user.id);
    if (!user.hasAccess) {
      return NextResponse.json(
        { error: "You do not have access to delete this post" },
        { status: 403 }
      );
    }
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    if (post.userId.toString() !== session.user.id) {
      return NextResponse.json(
        { error: "Unauthorized to delete this post" },
        { status: 403 }
      );
    }

    await Post.deleteOne({ _id: postId });

    return NextResponse.json({ message: "Post deleted successfully" });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
