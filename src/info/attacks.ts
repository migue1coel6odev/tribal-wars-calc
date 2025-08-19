import type { AttackPlans } from "../types";
import { ArmyAriete, ArmyNobre } from "./army_presets";


export const attacks = [
    {
        targetId: 'carolynaFraca',
        notes: 'Fake attack',
        sources: [
            {
                village: 'puzzle',
                army: ArmyAriete
            },
            {
                village: 'puzzle',
                army: {
                    VIKING: 1
                }
            },
            {
                village: 'puzzle2',
                army: {
                    LANCEIRO: 1
                }
            },
            {
                village: 'raptecmain',
                army: ArmyAriete
            },
            {
                village: 'quintelamain',
                army: ArmyAriete
            },
            {
                village: 'dannymain',
                army: ArmyAriete
            }
        ]
    },
    {
        targetId: 'carolynaForte',
        notes: 'Full power!',
        sources: [
            {
                village: 'puzzle',
                army: ArmyAriete
            },
            {
                village: 'puzzle',
                army: ArmyNobre
            },
            {
                village: 'quintelamain',
                army: ArmyNobre
            },
            {
                village: 'quintelasecond',
                army: ArmyAriete
            },
            {
                village: 'dannymain',
                army: ArmyAriete
            },
            {
                village: 'dannymain',
                army: ArmyNobre
            },
            {
                village: 'raptecmain',
                army: ArmyAriete
            },
            {
                village: 'raptecmain',
                army: ArmyNobre
            },
        ]
    }
] satisfies AttackPlans;