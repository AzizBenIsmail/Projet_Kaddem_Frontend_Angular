

export class Universite {
  idUniversite: number;
  nomUniversite: String;
  isDeleted:Boolean;
  isValid:Boolean;
  isSelected: boolean;
  isEdit: boolean;

}

export const UniversiteColumns = [
  {
      key: 'isSelected',
      type: 'isSelected',
      label: '',
  },
  {
      key: 'nomUniversite',
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