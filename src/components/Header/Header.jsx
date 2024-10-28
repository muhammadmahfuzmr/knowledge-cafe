import profile from '../../assets/profile.png'

const Header = () => {
  return (
    <div className='flex justify-between items-center border-b-2 p-4'>
      <h1 className="text-5xl font-bold">Knowledge Cafe</h1>
      <img src={profile} alt="" />
     
    </div>
  );
};

export default Header;
