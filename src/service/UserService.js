import axios from 'axios'

//const INSTRUCTOR = 'in28minutes';
const sheets = 'https://sheet.best/api/sheets';
//const user_api = '/e074dc63-ea7e-484b-bec3-f820f5ebaa8c';

class UserService {

    retrieveAllUser() {
        return axios.get(`${sheets}/e074dc63-ea7e-484b-bec3-f820f5ebaa8c`);
    }

    createUser(user) {
       
        //return axios.post(`${sheets}/e074dc63-ea7e-484b-bec3-f820f5ebaa8c`, user);

       var url_insert = (`${sheets}/e074dc63-ea7e-484b-bec3-f820f5ebaa8c`);
       axios.post(url_insert, {
                'nome': user.nome,
                'telefone': user.telefone,
                'cidade': user.cidade,
                }
    );

    /*async function makePostRequest() {

         
         console.log(url_insert)

    var params = {
        'nome': user.nome,
        'telefone': user.telefone,
        'cidade': user.cidade
      }

    let res = await axios.post(url_insert, params);


    console.log(res.data);
}

makePostRequest();*/


    };

    /*deleteCourse(name, id) {
        //console.log('executed service')
        return axios.delete(`${INSTRUCTOR_API_URL}/courses/${id}`);
    }

    retrieveCourse(name, id) {
        return axios.get(`${INSTRUCTOR_API_URL}/courses/${id}`);
    }

    updateCourse(name, id, course) {
        return axios.put(`${INSTRUCTOR_API_URL}/courses/${id}`, course);
    }
  
    createCourse(name, course) {
        return axios.post(`${INSTRUCTOR_API_URL}/courses/`, course);
    }*/

}

export default new UserService()