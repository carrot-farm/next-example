import axios from 'axios';
import Layout from '../components/Layout';

class SSRTest extends React.Component{

    //이 메소드로 리턴하는 값이 render 메소드에 전달
    static async getInitialProps({req}){
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        return {
            users: response.data
        };

    }

    render(){
        const {users} = this.props;
        const userList = users.map(
            user => <li key={user.id}>{user.username}</li>
        )
        return(
            <Layout>
                <ul>
                    {userList}
                </ul>
            </Layout>
        )
    }
}

export default SSRTest;

