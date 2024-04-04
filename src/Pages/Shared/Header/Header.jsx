import moment from 'moment';

const Header = () => {
    return (
        <div>
            <img src="./logo.png" alt="" className='mx-auto' />
            <p>Journalism Without Fear or Favour</p>
            <p className='text-xl'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;