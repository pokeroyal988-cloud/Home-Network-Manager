import { DeviceType, NetworkDevice } from './types';

export const NETWORK_DEVICES: NetworkDevice[] = [
  {
    id: 'main-router',
    name: 'ZTE F6601P (Router Tổng)',
    ip: '192.168.1.1',
    username: 'admin',
    pass: 'ZTEGD614C03E',
    type: DeviceType.MAIN_ROUTER,
    description: 'Router chính kết nối trực tiếp với đường dây Internet nhà mạng.'
  },
  {
    id: 'mesh-1',
    name: 'ZTE F6601P (Mesh 1)',
    ip: '192.168.102.1',
    username: 'admin',
    pass: 'ZTEGR4903167',
    type: DeviceType.MESH_NODE,
    description: 'Node phát sóng Wifi thứ nhất.'
  },
  {
    id: 'mesh-2',
    name: 'ZTE F6601P (Mesh 2)',
    ip: '192.168.102.10',
    username: 'admin',
    pass: 'ZTEGR4P22041',
    type: DeviceType.MESH_NODE,
    description: 'Node phát sóng Wifi thứ hai (được nối Mesh).'
  }
];
