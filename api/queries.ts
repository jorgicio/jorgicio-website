export const GET_POSTS = gql`
  query posts {
    posts (first: 20) {
      id
      title
    }
  }
`