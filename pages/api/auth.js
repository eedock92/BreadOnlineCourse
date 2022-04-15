

export  function handler(req, res) {
    res.status(200).json({ name: 'John Doe' })
  }

export  function Authenticate(req, res) {
    if (req.method === 'POST') {
      // Process a POST request

    } else {
      // Handle any other HTTP method
    }
  }