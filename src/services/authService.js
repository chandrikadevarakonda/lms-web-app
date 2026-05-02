//This simulates what our backend will return

const mockUsers = [
  {
    id: 1,
    email: 'admin@edunest.com',
    password: 'admin123',
    name: 'Admin User',
    role: 'admin',
  },
  {
    id: 2,
    email: 'staff@edunest.com',
    password: 'staff123',
    name: 'Staff User',
    role: 'staff',
  },
]

export const loginService = async (email, password) => {
  //simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  //find user with matching credentials
  const user = mockUsers.find(
    (u) => u.email === email && u.password === password
  )
  //if no match found
  if (!user) {
    throw new Error('Invalid email or password')
  }

  //return fake token n user data
  return {
    token: 'mock-jwt-token-' + user.role,
    user: {
      id: user.id,
      name: user.name,
      role: user.role,
      email: user.email,
    },
  }
}
