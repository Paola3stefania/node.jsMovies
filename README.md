# CLI with Node.js

Foobar is a Python library for dealing with word pluralization.

## Installation

Use the node package manager to install the code.

```bash
npm install
```

## Usage

```python
import foobar

# returns 'words'
foobar.pluralize('word')

# returns 'geese'
foobar.pluralize('goose')

# returns 'phenomenon'
foobar.singularize('phenomena')
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
.

-----

## Notes

npm link: explain...

## Software Architecture
command-movie
  get-person
    --id <int> *

  get-persons
    --page <int> *
    --popular *

  get-movie
    --id <int> *
    --reviews

  get-movies
    --page <int> *
    --popular **
    --now-playing **