

export class Equipe{
    idEquipe:number;
    nomEquipe:String;
    niveau:String;
    isDeleted:Boolean;
    isValid:Boolean;
    isSelected: boolean;
    isEdit: boolean;




}
export const EquipeColumns = [
    {
        key: 'isSelected',
        type: 'isSelected',
        label: '',
    },
    {
        key: 'nomEquipe',
        type: 'text',
        label: 'nom Equipe',
        required: true,
    }
    ,



    {
        key: 'isEdit',
        type: 'isEdit',
        label: '',
    }
];



