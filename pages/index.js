import dbConnect from './../lib/mongodb';
import Note from './../models/Note';

const Index = ({ list }) => {
  console.log(list);
  return (
    <>

    </>
  )
}

export async function getServerSideProps() {
  await dbConnect();
  const result = await Note.find({});
  const list = result.map(doc => {
    const note = doc.toObject();
    note._id = note._id.toString();
    return note;
  });

  return { props: { list } };
}

export default Index;