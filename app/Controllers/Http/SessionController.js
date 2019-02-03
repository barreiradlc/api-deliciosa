'use strict'

class SessionController {
  async create ({ request, auth }) { 
    const { email, password } = request.all()

    const token = await auth.attempt(email, password)

    return token
  }
}

module.exports = SessionController

// v1
// 'use strict'

// class SessionController {
// }

// module.exports = SessionController
