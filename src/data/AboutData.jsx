import { SiHiveBlockchain, SiStrapi, SiFsecure } from 'react-icons/si';
import { VscServerProcess } from 'react-icons/vsc';

export default [
  {
    id: 1,
    icon: <SiHiveBlockchain size={40}></SiHiveBlockchain>,
    head: 'Reliable, tamper-proof network',
    description:
      'Use decentralization, trusted nodes, premium data, and cryptographic proofs to connect highly accurate and available data/APIs to any smart contract.'
  },
  {
    id: 2,
    icon: <SiFsecure size={40}></SiFsecure>,
    head: 'Seamless connection to any API',
    description:
      'Build on a flexible framework that can retrieve data from any API, connect with existing systems, and integrate with any current or future blockchain.'
  },
  {
    id: 3,
    icon: <SiStrapi size={40}></SiStrapi>,
    head: 'Proven, ready-made solutions',
    description:
      'Integrate pre-built, time-tested oracle solutions that already secure tens of billions in smart contract value for market-leading decentralized applications.'
  },
  {
    id: 4,
    icon: <VscServerProcess size={40}></VscServerProcess>,
    head: 'Secure off-chain computation',
    description:
      'Use a decentralized network of DeFi Keeper nodes to automate contracts, mitigating risk of manual interventions and centralized servers.'
  }
];
