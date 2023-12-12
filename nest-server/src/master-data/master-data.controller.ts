import {Controller, Get} from '@nestjs/common';
import {MasterDataService} from './master-data.service';

@Controller('api/master-data')
export class MasterDataController {

    constructor(private masterDataService: MasterDataService) {
    }
    @Get()
    public async getMasterData() {
        return await this.masterDataService.getMasterData();
    }

}
