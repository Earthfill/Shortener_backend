# NestJS URL Shortener API

This is a simple URL shortener API built with NestJS that allows users to shorten URLs and redirect to the original URLs using the shortened codes.

## Installation

1. Clone this repository:
   
   ```bash
   git clone https://github.com/your-username/your-repo.git


2. Navigate into the project directory:

   ```bash
   cd url_shortener
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run start:dev
   ```

## Usage

### Shorten URL

- **URL**: `POST /url/shorten`
- **Request Body**:

  ```json
  {
    "longUrl": "https://example.com"
  }

  {
    "shortUrl": "http://localhost:3000/url/abc123"
  }

## Redirect to Original URL

- **URL**: `GET /url/:code`
- **Response**: Redirects to the original URL associated with the provided code.

## Project Structure

- `src/`: Contains the source code of the NestJS application.
  - `controllers/`: Controllers define the routes of the API.
  - `dto/`: Data transfer objects for input validation.
  - `entities/`: Entity definitions for the database.
  - `services/`: Business logic services.
  - `app.module.ts`: Main module of the application.
  - `main.ts`: Entry point of the application.

## Technologies Used

- NestJS: A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- TypeORM: An ORM for TypeScript and JavaScript (ES7, ES6, ES5). Supports MySQL and other databases.
- nanoid: A tiny, secure, URL-friendly, unique string ID generator for JavaScript.
- class-validator: A declarative validation library for TypeScript and JavaScript.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for bug fixes, feature requests, or suggestions.

## License

This project is licensed under the MIT License. See the LICENSE file for details.