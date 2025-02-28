export interface ContentProps {
  title?: string;
  avatarUrl?: string;
  model?: string;
  role?: string;
  roleAvatar?: {
    isUrl: boolean // 是不是图片
    url: string
  };
  items: {
    from: "human" | "gpt";
    value: string;
  }[];
}

export interface ConversationProps {
  id: string;
  model?: string;
  title?: string;
  avatar?: string;
  content: ContentProps;
  comments: CommentProps[];
  views: number;
}

export interface ConversationMeta {
  id: string;
  title: string;
  avatar: string;
  creator: {
    name: string;
    image: string;
  };
  saves: number;
  comments: number;
  views: number;
  createdAt: Date;
}

export interface Session {
  user: {
    email?: string | null;
    id?: string | null;
    name?: string | null;
  };
}

export interface CommentProps {
  id: string;
  content: string;
  position: number;
  user: {
    name: string;
    username: string;
    image: string;
  };
  createdAt: Date;
}
