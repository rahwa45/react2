import CardList from './Cardlist';
import './index.css';


function App() {
  const cardData = [
    {
      image: '/assets/animal1.jpg',
      title: 'Honeybee',
      description: 'Honeybees communicate the location of food through the "waggle dance." By performing a figure-eight dance, they indicate the direction and distance to the food source. This behavior helps the colony find food efficiently.',
    },
    {
      image: '/assets/animal2.png', // Same image for all cards in this example
      title: 'Albatross',
      description: 'Albatrosses are incredible long-distance travelers, flying up to 12,000 miles without stopping. They can sleep while flying by resting one half of their brain at a time',
    },
    {
      image: '/assets/animal3.jpg',
      title: 'Quokka',
      description: 'The “Happiest Animal on Earth”, When humans take selfies with them, they often look like they’re grinning right along with you.',
    },
    {
      image: '/assets/animal5.jpg',
      title: 'Goat',
      description: 'Goats are natural parkour pros, jumping and balancing on anything they can find, from cars to rocks. Their bouncy moves and smug poses make them look like they are always showing off!.',
    },
    {
      image: '/assets/animal8.png',
      title: 'Saltwater Crocodile',
      description: 'Saltwater crocodiles are the largest living reptiles, growing over 23 feet long and known for their aggressive hunting. They can launch themselves out of the water with immense force to catch prey.',
    },
    {
      image: '/assets/animal9.jpg',
      title: 'Blue whale ',
      description: 'The blue whale is the largest animal on Earth, growing up to 100 feet long and weighing 200 tons. Its tongue can weigh as much as an elephant, and its heart can weigh as much as a car!',
    },
    {
      image: '/assets/animal14.webp',
      title: 'peacock',
      description: 'The peacock is renowned for its vibrant, iridescent feathers, especially its stunning tail that displays bright blues, greens, and golds. The eye-like patterns on its tail signal health and strength, used to attract mates.',
    },
    {
      image: '/assets/animal11.jpg',
      title: 'Blobfish',
      description: 'The blobfish is considered one of the ugliest animals due to its gelatinous, saggy appearance and sad, melted face. Despite its looks, it thrives at extreme ocean depths, perfectly adapted to the high pressure.',
    },
    {
      image: '/assets/animal12.jpg',
      title: 'Dung beetle',
      description: 'The dung beetle is the strongest animal relative to size, able to pull 1,141 times its body weight, like a human pulling six double-decker buses. Meanwhile, the elephant holds the title for the strongest land animal, using its 40,000-muscle trunk to lift over 600 pounds.',
    },
    {
      image: '/assets/animal13.jpg',
      title: 'Octopuses',
      description: 'Octopuses are highly intelligent, capable of solving problems, using tools, and changing color to blend in. With three hearts, blue blood, and the ability to squeeze through tiny spaces, they are masters of flexibility and adaptability.',
    },
  ];
  return (
    <div className="App">
      <h1>The Fascinating World of Animals</h1>
      <CardList data={cardData} />
    </div>
  );
}

export default App;