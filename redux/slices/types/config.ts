export type ConfigEntity = {
  Color: string;
  Name: string;
};

export interface IConfigState {
  entities: ConfigEntity;
  loading: boolean;
}
