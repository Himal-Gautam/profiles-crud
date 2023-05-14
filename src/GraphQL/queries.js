import { gql } from "@apollo/client";

// Define a GraphQL query to get all profiles with pagination, ordering, and searching
const GET_ALL_PROFILES = gql`
  query GetAllProfiles(
    $orderBy: globalOrderBy
    $searchString: String
    $rows: Int
    $page: Int
  ) {
    getAllProfiles(
      orderBy: $orderBy
      searchString: $searchString
      rows: $rows
      page: $page
    ) {
      size
      profiles {
        id
        first_name
        last_name
        email
        is_verified
        image_url
        description
      }
    }
  }
`;

// Define a GraphQL mutation to delete a profile by ID
const DELETE_PROFILE = gql`
  mutation DeleteProfile($deleteProfileId: String!) {
    deleteProfile(id: $deleteProfileId)
  }
`;

// Export the queries/mutations so they can be used in other files
export { GET_ALL_PROFILES, DELETE_PROFILE };
