import axios from 'axios'

//const INSTRUCTOR = 'in28minutes';
const sheets = 'https://sheet.best/api/sheets';
const api = 'http://www.send2u.com.br/sms/service/evento';
//const user_api = '/e074dc63-ea7e-484b-bec3-f820f5ebaa8c';

class SensorService {

    retrieveAllSensor() {
        return axios.get(`${sheets}/12bd5c43-09c2-4412-83e8-398e1946672d`);
    }

    deleteRegistro(sensors) {
        var user = [];

            var url_update = `${sheets}/12bd5c43-09c2-4412-83e8-398e1946672d/id/`+sensors.id;
            
            console.log(url_update);
            
            axios.patch(url_update, {
                'id': '',
                'localizacao': '',
                'data': '',
                'temperatura' : '',
                'notificado' : '',
                }
            );
        }
 

    notificar(sensors) {
        var user = [];
        var telefone = null;

        //busca os dados do telefone
        axios.get(`${sheets}/e074dc63-ea7e-484b-bec3-f820f5ebaa8c`).then
        (response => {
            console.log(response.data);
            user = response.data;

            telefone = user[0].telefone;
            /*id    localizacao data    temperatura notificado*/
            console.log(`${api}/sendSms?account=19173&user=Nasa&pass=Nasa&to=`+user[0].telefone+`&msg=Evento Nasa - Incendio em sua regiao&idSms=nasa`);
            //axios.get(`${api}/sendSms?account=19173&user=Nasa&pass=Nasa&to=`+user[0].telefone+`&msg=Evento Nasa - Incendio em sua regiao&idSms=nasa`);
            
            var url_update = `${sheets}/12bd5c43-09c2-4412-83e8-398e1946672d/id/`+sensors.id;
            
            console.log(url_update);
            
            axios.patch(url_update, {
                'id': sensors.id,
                'localizacao': sensors.localizacao,
                'data': sensors.data,
                'temperatura' : sensors.temperatura,
                'notificado' : 'True',
                }

            );
            
            console.log(sensors.id);
        })

        /*for (i = 0; i < user.length; i++) {
            axios.get(`${api}/sendSms?account=19173&user=Nasa&pass=Nasa&to=`${user.telefone}`&msg=Evento Nasa - Incêndio em sua região&idSms=nasa`);
        }*/
    
        //console.log(`${api}/sendSms?account=19173&user=Nasa&pass=Nasa&to=`+ telefone +`&msg=Evento Nasa - Incendio em sua regiao&idSms=nasa`);
        //return axios.get(`${api}/sendSms?account=19173&user=Nasa&pass=Nasa&to=`+{telefone}+`&msg=Evento Nasa - Incendio em sua regiao&idSms=nasa`);
    }

    /*
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

export default new SensorService()