import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Employee } from './employee.entity';
import { CreateEmployee } from './model/createEmployee';
import { EmployeeDetail } from './model/employee.interface';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}

  findAll(name, gender, sort): Promise<EmployeeDetail[]> {
    const search = {};
    if (name) {
      search['fullName'] = Like(`%${name}%`);
    }
    if (gender) {
      search['gender'] = gender;
    }
    return this.employeeRepository.find({
      where: search,
      order: { fullName: sort || 'ASC' },
    });
  }

  getOne(id: number): Promise<EmployeeDetail> {
    return this.employeeRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  create(body: CreateEmployee): Promise<CreateEmployee> {
    return this.employeeRepository.save(body);
  }

  update(id: number, body: EmployeeDetail): Promise<any> {
    return this.employeeRepository.update(id, body);
  }

  delete(id: number): Promise<any> {
    return this.employeeRepository.delete(id);
  }
}
