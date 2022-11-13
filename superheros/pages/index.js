import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
import axios, * as others from "axios";
import Link from "next/link";

const index = ({ heros }) => {
  return (
    <div className="container">
      <h1 className="display-2">Superhero Identity Manager</h1>
      <div>
        {heros.map((hero) => {
          return (
            <MDBCard className="border border-2 my-2">
              <MDBCardBody>
                <MDBCardTitle>{hero.superHero}</MDBCardTitle>
                <MDBCardText>Reveal Identity</MDBCardText>
                <Link href={`/${hero._id}`}>
                  <MDBBtn className="mx-2">View Hero</MDBBtn>
                </Link>
                <Link href={`/${hero._id}/edit`}>
                  <MDBBtn>Edit Hero</MDBBtn>
                </Link>
              </MDBCardBody>
            </MDBCard>
          );
        })}
      </div>
    </div>
  );
};

// Server Side Rendering instead of useEffect

//old way
// index.getInitialProps = async () => {
//   const res = await axios("http://localhost:3000/api/hero");
//   console.log(res.data.hero);
//   return {};
// };

// getStaticProps
// export async function getStaticProps(context) {
//   const res = await axios("http://localhost:3000/api/hero");
//   console.log(res.data.hero);
//   const { hero } = res.data;
//   console.log(hero);
//   return {
//     props: { heros: hero }, // will be passed to the page component as props
//   };
// }

// getServerSideProps
export async function getServerSideProps(context) {
  const res = await axios("http://localhost:3000/api/hero");
  // console.log(res.data.hero);
  const { hero } = res.data;
  // console.log(hero);
  return {
    props: { heros: hero }, // will be passed to the page component as props
  };
}
export default index;
