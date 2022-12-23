import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
	mutation Login (
		$email: String 
		$password: String!
	) {
		tokenAuth(
			email: $email
			password: $password
		){
			token
			errors
			user{
				username
				email
			}
		}
  	}
`

export const REGISTER_MUTATION = gql`
	mutation register(
		$username: String!
		$password1: String!
		$password2: String!
		$email: String!
	) {
		register(
			username: $username
			password1: $password1
			password2: $password2
			email: $email
		) {
			success
			errors
			token
			refreshToken
		}
	}
`