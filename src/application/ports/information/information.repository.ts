import { Information } from '../../../domain/model/information.model';

export interface InformationRepository {
    create(information: Information): Promise<void>;
    similaritySearchByContent(content: string): Promise<Information[]>;
}
