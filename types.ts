export enum DeviceType {
  MAIN_ROUTER = 'MAIN_ROUTER',
  MESH_NODE = 'MESH_NODE',
}

export interface NetworkDevice {
  id: string;
  name: string;
  ip: string;
  username: string;
  pass: string;
  type: DeviceType;
  description: string;
}
