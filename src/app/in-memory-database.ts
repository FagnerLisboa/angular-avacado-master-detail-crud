    import { InMemoryDbService } from "angular-in-memory-web-api";

    export class InMemoryDatabase implements InMemoryDbService {
        CreateDb(){
            const categories = [
                { id: 1, name: 'Moradia', descrition: 'Pagamentos de Conta de Casa'},
                { id: 2, name: 'Saúde', descrition: 'Plano de saúde e Remédios'},
                { id: 3, name: 'Lazer', descrition: 'Cinema, Parque, Praia, etc'},
                { id: 4, name: 'Salário', descrition: 'Recebimento de Salário'},
                { id: 5, name: 'Freelas', descrition: 'Trabalhos com Freelancer'}
            ];

            return { categories }
        }
    }