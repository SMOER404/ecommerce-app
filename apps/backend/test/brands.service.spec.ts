import { Test, TestingModule } from '@nestjs/testing';
import { BrandsService } from '../brands/brands.service';
import { BrandsController } from '../brands/brands.controller';
import { CreateBrandDto } from '../brands/dto/create-brand.dto';
import { UpdateBrandDto } from '../brands/dto/update-brand.dto';
import { Brand } from '../models/brand.model';
import { getModelToken } from '@nestjs/sequelize';
import { SequelizeModule } from '@nestjs/sequelize';
import { testConfig } from '../config/test.config';

describe('BrandsService', () => {
  let service: BrandsService;
  let controller: BrandsController;

  const mockBrandsRepository = {
    findAll: jest.fn(),
    findOne: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        SequelizeModule.forRoot(testConfig),
        SequelizeModule.forFeature([Brand]),
      ],
      controllers: [BrandsController],
      providers: [
        BrandsService,
        {
          provide: getModelToken(Brand),
          useValue: mockBrandsRepository,
        },
      ],
    }).compile();

    service = module.get<BrandsService>(BrandsService);
    controller = module.get<BrandsController>(BrandsController);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a brand', async () => {
      const createBrandDto: CreateBrandDto = {
        name: 'Test Brand',
        description: 'Test Description',
        image: 'test-image.png',
      };

      const expectedBrand = {
        id: '123e4567-e89b-12d3-a456-426614174000',
        ...createBrandDto,
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      mockBrandsRepository.create.mockResolvedValue(expectedBrand);

      const result = await service.create(createBrandDto);

      expect(result).toEqual(expectedBrand);
      expect(mockBrandsRepository.create).toHaveBeenCalledWith(createBrandDto);
    });
  });

  describe('findAll', () => {
    it('should return an array of brands', async () => {
      const expectedBrands = [
        {
          id: '123e4567-e89b-12d3-a456-426614174000',
          name: 'Test Brand 1',
          description: 'Test Description 1',
          image: 'test-image-1.png',
          isActive: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '123e4567-e89b-12d3-a456-426614174001',
          name: 'Test Brand 2',
          description: 'Test Description 2',
          image: 'test-image-2.png',
          isActive: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      mockBrandsRepository.findAll.mockResolvedValue(expectedBrands);

      const result = await service.findAll();

      expect(result).toEqual(expectedBrands);
      expect(mockBrandsRepository.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a brand by id', async () => {
      const expectedBrand = {
        id: '123e4567-e89b-12d3-a456-426614174000',
        name: 'Test Brand',
        description: 'Test Description',
        image: 'test-image.png',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      mockBrandsRepository.findOne.mockResolvedValue(expectedBrand);

      const result = await service.findOne('123e4567-e89b-12d3-a456-426614174000');

      expect(result).toEqual(expectedBrand);
      expect(mockBrandsRepository.findOne).toHaveBeenCalledWith({
        where: { id: '123e4567-e89b-12d3-a456-426614174000' },
      });
    });
  });

  describe('update', () => {
    it('should update a brand', async () => {
      const updateBrandDto: UpdateBrandDto = {
        name: 'Updated Brand',
        description: 'Updated Description',
        image: 'updated-image.png',
      };

      const expectedBrand = {
        id: '123e4567-e89b-12d3-a456-426614174000',
        ...updateBrandDto,
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      mockBrandsRepository.update.mockResolvedValue(expectedBrand);

      const result = await service.update('123e4567-e89b-12d3-a456-426614174000', updateBrandDto);

      expect(result).toEqual(expectedBrand);
      expect(mockBrandsRepository.update).toHaveBeenCalledWith(updateBrandDto, {
        where: { id: '123e4567-e89b-12d3-a456-426614174000' },
      });
    });
  });

  describe('remove', () => {
    it('should remove a brand', async () => {
      mockBrandsRepository.remove.mockResolvedValue(undefined);

      await service.remove('123e4567-e89b-12d3-a456-426614174000');

      expect(mockBrandsRepository.remove).toHaveBeenCalledWith({
        where: { id: '123e4567-e89b-12d3-a456-426614174000' },
      });
    });
  });
}); 