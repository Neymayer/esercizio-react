import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import Card2 from './components/Card2';
import styled from "styled-components";
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Items>
        <p>prova2</p>
        <Card
          img="/images/item1.png"
          title="Ray-Ban Wayfarer"
          code="RB3210 2112A"
          qty="number1"
          price="€ 121,60"
        />
        <Card
          img="/images/item2.png"
          title="Ray-Ban Round"
          code="RB9210 1149"
          qty="number2"
          price="€ 166,00"
        />
        <Card
          img="/images/item3.png"
          title="Ray-Ban Clubmaster"
          code="RB3594 9093C8 53"
          qty="number3"
          price="€ 152,00"
        />
        <Card2
          img="/images/item4.png"
          title="Ray-Ban RB3594"
          code="RB3594 2345 53"
          qty="number4"
          price="€ 250,90"
        />
        <Card2
          img="/images/item5.png"
          title="Ray-Ban Aviator"
          code="RB6211 5122A 50"
          qty="number5"
          price="€ 150,90"
        />
      </Items>
      <Footer />
    </div>
  );
}

export default App;

const Items = styled.div`
display: flex;
justify-content: flex-start;
margin-left: 115px;
margin-right: 115px;
`;
