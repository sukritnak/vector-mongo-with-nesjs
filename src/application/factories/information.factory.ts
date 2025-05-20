import { Builder } from 'builder-pattern';

import { Information } from '../../domain/model/information.model';
import { CreateInformationCommand } from '../commands/createInformation.command';

export class InformationFactory {
    static create(command: CreateInformationCommand): Information {
        return Builder(Information).content(command.content).metadata(command.metadata).build();
    }
}
