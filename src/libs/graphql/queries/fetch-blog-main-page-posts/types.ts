interface AuthorType {
  __typename: string
  name: string
  avatarImage: {
    __typename: string
    url: string
  }
}

interface CategoryType {
  __typename: string
  name: string
}

export interface PostType {
  __typename: string
  id: string
  title: string
  subtitle: string
  author: AuthorType
  coverImage: {
    __typename: string
    url: string
  }
  categories: CategoryType[]
  slug: string
  createdAt: Date
}

export interface FetchBlogMainPagePosts {
  posts: PostType[]
}
