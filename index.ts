type Girlfriend = {
  name: string;
  age?: number;
};

const friend: Girlfriend = {
  name: 'Ember',
};

type Name = string;
type Age = number;
type Person = Name | Age;

type PositionX = { x: number };
type PositionY = { y: number };

type NewType = PositionX & PositionY;

let position: NewType = { x: 30, y: 20 };

type User = {
  name: string;
  phone: number;
  email?: string;
};

type Adult = { adult: boolean };

type NewUser = User & Adult;

let signin: NewUser = {
  name: 'Kim',
  phone: 123,
  email: 'jun@gmail.com',
  adult: true,
};
