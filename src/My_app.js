import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header/header';
import Basicform from './Basicform';
import ValidationForm from './Validationform/ValidationForm';
import Propsindex from './Props/Props-index';
import Forms from './Forms/Forms';

function My_app() {
    return (
        <div className='my-5'>
            <Header />
            <Basicform />
            <ValidationForm />
            <Propsindex name='EWW' />
            <Forms />
            <Propsindex f_name='Excellent' l_name='Web World' email='excellentwebworld@gmail.com' phone_no='0281 236595' />

        </div>
    )
}
export default My_app;