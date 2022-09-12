import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployee } from './model/createEmployee';
import { EmployeeDetail } from './model/employee.interface';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}
  @Get()
  findAll(
    @Query('fullName') name: string,
    @Query('gender') gender: string,
    @Query('sort') sort: string,
  ) {
    return this.employeeService.findAll(name, gender, sort);
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.employeeService.getOne(id);
  }

  @Post()
  creat(@Body() body: CreateEmployee) {
    return this.employeeService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: EmployeeDetail) {
    return this.employeeService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.employeeService.delete(id);
  }
}
