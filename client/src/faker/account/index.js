var faker = require('faker');

export const getAccount=()=>Array(20).fill().map(() => 
(
    {
        name:faker.name.findName(),
        userName:faker.internet.userName(),
        password:faker.internet.password(),
        email:faker.internet.email(),
        date:faker.date.recent(),
        avatar:faker.internet.avatar()
    }
));


export const getWords=()=>(
    {words:faker.random.words()}
);
export const getLorem=()=>(
    {
        words:faker.lorem.words(),
        sentences:faker.lorem.sentences(),
        paragraph:faker.lorem.paragraph(),
        paragraphs:faker.lorem.paragraphs()
    }
);
export const fakeAccount=()=>({
    "name": "Ariel Kotch",
    "userName": "arielkotch",
    "password": "memb1234",
    "email": "arielkotch@outlook.com",
    "date": "2019-03-31T05:26:38.045Z",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/arishi_/128.jpg"
  });