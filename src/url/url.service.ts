import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Url } from './schemas/url.entity';
import { Repository } from 'typeorm';
import { ShortenURLDto } from './dto/url.dto';
import { isURL } from 'class-validator';
import { nanoid } from 'nanoid';

@Injectable()
export class UrlService {
  constructor(
    @InjectRepository(Url)
    private urlRepository: Repository<Url>,
  ) {}

  async shortenUrl(url: ShortenURLDto) {
    const { longUrl } = url;

    // checks if longurl is a valid URL
    if (!isURL(longUrl)) {
      throw new BadRequestException('String must be a valid URL');
    }

    const urlCode = nanoid(10);
    const baseURL = 'http://localhost:3000'; // in production it is the domain name

    try {
      // checks if the URL has already been shortened
      let url = await this.urlRepository.findOneBy({ longUrl });

      if (url) {
        return url.shortUrl;
      } else {
        const shortUrl = `${baseURL}/url/${urlCode}`;

        url = this.urlRepository.create({
          urlCode,
          longUrl,
          shortUrl,
        });
        this.urlRepository.save(url);

        return url.shortUrl;
      }
    } catch (error) {
      console.log(error);
      throw new UnprocessableEntityException('Server Error');
    }
  }

  async redirect(urlCode: string) {
    try {
      const url = await this.urlRepository.findOneBy({ urlCode });
      if (url) {
        return url;
      }
    } catch (error) {
      console.log(error);
      throw new NotFoundException('Resource Not Found');
    }
  }
}
