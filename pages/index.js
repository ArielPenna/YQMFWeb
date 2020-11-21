import Container from '../components/Container';
import Slider from '../components/Slider';
import Tips from '../components/Tips';
import Kisar from '../components/Kisar';

const Index = () => {
  return (
    <Container>
      <Slider />
      <Tips />
      <Kisar />
      <style jsx global>
        {`
          :root {
            /* Colors  */
            --yellow: #ffdf2b;
            --fucsia: #e43397;
            --traslucid: #ffffff85;
          }
          }
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
        `}
      </style>
    </Container>
  );
};
export default Index;
