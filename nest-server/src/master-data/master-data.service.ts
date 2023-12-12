import {Injectable} from '@nestjs/common';
import {MasterDataModel} from './master-data.model';

@Injectable()
export class MasterDataService {

    private masterData: MasterDataModel;

    getMasterData() {
        return new Promise((resolve) => {
            setTimeout(() => {
                this.masterData = {
                    inAudience: true,
                    stockSymbols: ['VGYD', 'CMT', 'DE'],
                };
                resolve(this.masterData);
            }, 200);
        });
    }
}
