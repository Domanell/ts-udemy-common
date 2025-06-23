# TypeScript Udemy Projects

This repository contains several TypeScript-based mini-projects, each in its own folder. Below is a description of each project and commands to start them:

## features

A collection of TypeScript feature demonstrations, including:

- **arrays.ts**: Examples of array types and type inference.
- **classes.ts**: Demonstrates class syntax, inheritance, and access modifiers.
- **functions.ts**: Shows function typing, return types, and destructuring.
- **interfaces.ts**: Usage of interfaces for type safety and polymorphism.
- **objects.ts**: Object typing and destructuring.
- **types.ts**: Type annotations and class instantiation.
- **variables.ts**: Variable declarations with type annotations.
- **json/**: Fetches and logs JSON data from an API using Axios.

**Commands:**

```
npm install
npx ts-node arrays.ts         # or any other file, e.g. npx ts-node json/index.ts
```

## maps

A TypeScript project that integrates with the Google Maps API. It demonstrates:

- Creating random users and companies using Faker.js.
- Displaying markers for users and companies on a Google Map.
- Using interfaces for type safety with map markers.

**Commands:**

```
npm install
npx parcel index.html
```

## sort

A TypeScript project demonstrating sorting algorithms and object-oriented design:

- Implements a generic `Sorter` abstract class.
- Concrete classes for sorting numbers, strings, and linked lists.
- Demonstrates inheritance, method overriding, and polymorphism.
- Includes a build system and scripts for running and watching code.

**Commands:**

```
npm install
npm start              # build and run in watch mode
```

## stats

A TypeScript project for analyzing football match data:

- Reads CSV files containing match results.
- Uses composition and inheritance to process and analyze data.
- Generates reports in the console and as HTML files.
- Demonstrates advanced TypeScript features like generics, enums, and interfaces.

**Commands:**

```
npm install
npm start              # build and run in watch mode
```

---

Each project is self-contained and demonstrates different aspects of TypeScript, object-oriented programming, and integration with external libraries and APIs.
