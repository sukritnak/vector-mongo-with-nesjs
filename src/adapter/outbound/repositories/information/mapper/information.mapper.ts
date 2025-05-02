import { Builder } from 'builder-pattern';

import { Information } from '../../../../../domain/model/information.model';
import { InformationEntity } from '../information.entity';

export class InformationMapper {
    static toDomain(information: InformationEntity): Information {
        return Builder(Information)
            .content(information.content)
            .metadata(information.metadata)
            .createdAt(information.createdAt)
            .updatedAt(information.updatedAt)
            .build();
    }
}
