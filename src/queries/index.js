import gql from 'graphql-tag';

export const getUserFromToken = gql`
  query getUserFromToken($token:String!, $app: String!){
    getUserFromToken(token:$token, app:$app) {
      _id
      active
      lastAccessed
      firstName
      lastName
      email
      internal
      info {
        userName
        country {
          code
          name
        }
        company
        phoneNumber
        phoneNumberCountryCode
        workAddress
        department
        clientRole
        title
      }
      applications {
        name
        followedArtists {
          _id
          name
          image
        }
        subscriptions {
          name
          value
          settings {
            emailFrequency
            emailFrequencyDetails
            artists
            labels
            partners {
              id
              name
            }
            primaryTerritory {
              id
              name
              type
            }
            secondaryTerritory {
              id
              name
              type
            }
          }
        }
        revenueAccess {
          canView
          pending
        }
        questionary {
          name
          value
        }
        active
      }
    }
  }
`;