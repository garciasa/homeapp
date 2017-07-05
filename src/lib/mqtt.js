import mqtt from 'mqtt';
export const client  = mqtt.connect('ws://192.168.2.99:1884');