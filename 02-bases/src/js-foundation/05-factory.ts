interface BuildMakePersonOptions {
  getId: () => string;
  getAge: (birthdate: string) => number;
}

interface PersonOptions {
  name: string;
  birthdate: string;
}

export const buildMakePerson = ({ getId, getAge }: BuildMakePersonOptions) => {
  return ({ name, birthdate }: PersonOptions) => {
    return {
      id: getId(),
      name: name,
      birthdate: birthdate,
      age: getAge(birthdate),
    };
  };
};
