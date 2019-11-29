import Service from '../service';
import axios from 'axios';
import { createServiceUrl } from '../../commons/helpers/service';

class UserService extends Service {
    authenticateUser = credentials =>
      axios.post(createServiceUrl('users/authenticatemobil'), credentials).then(data => data.data);

}

export default UserService;