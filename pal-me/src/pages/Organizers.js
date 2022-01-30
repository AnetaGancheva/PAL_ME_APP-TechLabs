import Bar from '../components/Bar';
import Footer from '../components/Footer';
import InfoContainer from '../components/InfoContainer';
import Navbar from '../components/Navbar';
import { ForOrganizers } from '../data';

const Organizers = () => {
  return <>
  <Navbar/>
  <Bar title={"Organizers"} />
  {ForOrganizers.map(item => <InfoContainer item={item}/>)}
  <Footer />
</>;
};

export default Organizers;

