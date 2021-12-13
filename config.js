export const configCommands = [
  {
    case: 'get-persons',
    options: [
      'get-persons',
      '--popular',
      '--page'
    ]
  },
  {
    case: 'get-movies',
    options: [
      'get-movies',
      '--popular',
      '--page',
      '--now-playing'
    ]
  },
  {
    case: 'get-person',
    options: [
      'get-person',
      '--id'
    ]
  },
  {
    case: 'get-movie',
    options: [
      'get-movie',
      '--id',
      '--reviews'
    ]
  }
]