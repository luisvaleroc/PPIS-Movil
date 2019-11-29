import Service from '../Service';
import axios from 'axios';
import { createServiceUrl } from '../../common/helpers/service';

class UserService extends Service {
    authenticateUser = credentials =>
      axios.post(createServiceUrl('users/authenticatemobil'), credentials).then(data => data.data);

}

export default UserService;