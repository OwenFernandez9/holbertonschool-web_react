/******/ (() => { // webpackBootstrap
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Cannot work from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    return Teacher;
}());
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    else {
        return new Director();
    }
}
function isDirector(employee) {
    return employee.workDirectorTasks !== undefined;
}
function executeWork(employee) {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks());
    }
    else {
        console.log(employee.workTeacherTasks());
    }
}
console.log(createEmployee(200) instanceof Teacher ? 'Teacher' : 'Director');
console.log(createEmployee(1000) instanceof Director ? 'Director' : 'Teacher');
console.log(createEmployee('$500') instanceof Director ? 'Director' : 'Teacher');
executeWork(createEmployee(200));
executeWork(createEmployee(1000));
function teachClass(todayClass) {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    }
    else if (todayClass === 'History') {
        return 'Teaching History';
    }
    return '';
}
console.log(teachClass('Math')); // Teaching Math
console.log(teachClass('History')); // Teaching History

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFZQTtJQUFBO0lBWUEsQ0FBQztJQVhHLCtCQUFZLEdBQVo7UUFDSSxPQUFPLG1CQUFtQixDQUFDO0lBQy9CLENBQUM7SUFFRCxpQ0FBYyxHQUFkO1FBQ0ksT0FBTyx3QkFBd0IsQ0FBQztJQUNwQyxDQUFDO0lBRUQsb0NBQWlCLEdBQWpCO1FBQ0ksT0FBTywyQkFBMkIsQ0FBQztJQUN2QyxDQUFDO0lBQ0wsZUFBQztBQUFELENBQUM7QUFFRDtJQUFBO0lBWUEsQ0FBQztJQVhHLDhCQUFZLEdBQVo7UUFDSSxPQUFPLHVCQUF1QixDQUFDO0lBQ25DLENBQUM7SUFFRCxnQ0FBYyxHQUFkO1FBQ0ksT0FBTyxxQkFBcUIsQ0FBQztJQUNqQyxDQUFDO0lBRUQsa0NBQWdCLEdBQWhCO1FBQ0ksT0FBTyxpQkFBaUIsQ0FBQztJQUM3QixDQUFDO0lBQ0wsY0FBQztBQUFELENBQUM7QUFFRCxTQUFTLGNBQWMsQ0FBQyxNQUF1QjtJQUMzQyxJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsSUFBSSxNQUFNLEdBQUcsR0FBRyxFQUFFO1FBQzVDLE9BQU8sSUFBSSxPQUFPLEVBQUUsQ0FBQztLQUN4QjtTQUFNO1FBQ0gsT0FBTyxJQUFJLFFBQVEsRUFBRSxDQUFDO0tBQ3pCO0FBQ0wsQ0FBQztBQUVELFNBQVMsVUFBVSxDQUFDLFFBQTRCO0lBQzVDLE9BQVEsUUFBcUIsQ0FBQyxpQkFBaUIsS0FBSyxTQUFTLENBQUM7QUFDbEUsQ0FBQztBQUVELFNBQVMsV0FBVyxDQUFDLFFBQTRCO0lBQzdDLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQztLQUM3QztTQUFNO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO0tBQzVDO0FBQ0wsQ0FBQztBQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxZQUFZLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUM3RSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsWUFBWSxRQUFRLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDL0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFlBQVksUUFBUSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ2pGLFdBQVcsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNqQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFJbEMsU0FBUyxVQUFVLENBQUMsVUFBb0I7SUFDcEMsSUFBSSxVQUFVLEtBQUssTUFBTSxFQUFFO1FBQ3ZCLE9BQU8sZUFBZSxDQUFDO0tBQzFCO1NBQU0sSUFBSSxVQUFVLEtBQUssU0FBUyxFQUFFO1FBQ2pDLE9BQU8sa0JBQWtCLENBQUM7S0FDN0I7SUFDRCxPQUFPLEVBQUUsQ0FBQztBQUNkLENBQUM7QUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCO0FBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIERpcmVjdG9ySW50ZXJmYWNlIHtcbiAgICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nO1xuICAgIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZztcbiAgICB3b3JrRGlyZWN0b3JUYXNrcygpOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBUZWFjaGVySW50ZXJmYWNlIHtcbiAgICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nO1xuICAgIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZztcbiAgICB3b3JrVGVhY2hlclRhc2tzKCk6IHN0cmluZztcbn1cblxuY2xhc3MgRGlyZWN0b3IgaW1wbGVtZW50cyBEaXJlY3RvckludGVyZmFjZSB7XG4gICAgd29ya0Zyb21Ib21lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIldvcmtpbmcgZnJvbSBob21lXCI7XG4gICAgfVxuXG4gICAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiR2V0dGluZyBhIGNvZmZlZSBicmVha1wiO1xuICAgIH1cblxuICAgIHdvcmtEaXJlY3RvclRhc2tzKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIkdldHRpbmcgdG8gZGlyZWN0b3IgdGFza3NcIjtcbiAgICB9XG59XG5cbmNsYXNzIFRlYWNoZXIgaW1wbGVtZW50cyBUZWFjaGVySW50ZXJmYWNlIHtcbiAgICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiQ2Fubm90IHdvcmsgZnJvbSBob21lXCI7XG4gICAgfVxuXG4gICAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiQ2Fubm90IGhhdmUgYSBicmVha1wiO1xuICAgIH1cblxuICAgIHdvcmtUZWFjaGVyVGFza3MoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiR2V0dGluZyB0byB3b3JrXCI7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVFbXBsb3llZShzYWxhcnk6IG51bWJlciB8IHN0cmluZyk6IFRlYWNoZXIgfCBEaXJlY3RvciB7XG4gICAgaWYgKHR5cGVvZiBzYWxhcnkgPT09ICdudW1iZXInICYmIHNhbGFyeSA8IDUwMCkge1xuICAgICAgICByZXR1cm4gbmV3IFRlYWNoZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IERpcmVjdG9yKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpc0RpcmVjdG9yKGVtcGxveWVlOiBUZWFjaGVyIHwgRGlyZWN0b3IpOiBlbXBsb3llZSBpcyBEaXJlY3RvciB7XG4gICAgcmV0dXJuIChlbXBsb3llZSBhcyBEaXJlY3Rvcikud29ya0RpcmVjdG9yVGFza3MgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZXhlY3V0ZVdvcmsoZW1wbG95ZWU6IFRlYWNoZXIgfCBEaXJlY3Rvcik6IHZvaWQge1xuICAgIGlmIChpc0RpcmVjdG9yKGVtcGxveWVlKSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlbXBsb3llZS53b3JrRGlyZWN0b3JUYXNrcygpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhlbXBsb3llZS53b3JrVGVhY2hlclRhc2tzKCkpO1xuICAgIH1cbn1cblxuY29uc29sZS5sb2coY3JlYXRlRW1wbG95ZWUoMjAwKSBpbnN0YW5jZW9mIFRlYWNoZXIgPyAnVGVhY2hlcicgOiAnRGlyZWN0b3InKTtcbmNvbnNvbGUubG9nKGNyZWF0ZUVtcGxveWVlKDEwMDApIGluc3RhbmNlb2YgRGlyZWN0b3IgPyAnRGlyZWN0b3InIDogJ1RlYWNoZXInKTtcbmNvbnNvbGUubG9nKGNyZWF0ZUVtcGxveWVlKCckNTAwJykgaW5zdGFuY2VvZiBEaXJlY3RvciA/ICdEaXJlY3RvcicgOiAnVGVhY2hlcicpO1xuZXhlY3V0ZVdvcmsoY3JlYXRlRW1wbG95ZWUoMjAwKSk7XG5leGVjdXRlV29yayhjcmVhdGVFbXBsb3llZSgxMDAwKSk7XG5cbnR5cGUgU3ViamVjdHMgPSAnTWF0aCcgfCAnSGlzdG9yeSc7XG5cbmZ1bmN0aW9uIHRlYWNoQ2xhc3ModG9kYXlDbGFzczogU3ViamVjdHMpOiBzdHJpbmcge1xuICAgIGlmICh0b2RheUNsYXNzID09PSAnTWF0aCcpIHtcbiAgICAgICAgcmV0dXJuICdUZWFjaGluZyBNYXRoJztcbiAgICB9IGVsc2UgaWYgKHRvZGF5Q2xhc3MgPT09ICdIaXN0b3J5Jykge1xuICAgICAgICByZXR1cm4gJ1RlYWNoaW5nIEhpc3RvcnknO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG59XG5cbmNvbnNvbGUubG9nKHRlYWNoQ2xhc3MoJ01hdGgnKSk7IC8vIFRlYWNoaW5nIE1hdGhcbmNvbnNvbGUubG9nKHRlYWNoQ2xhc3MoJ0hpc3RvcnknKSk7IC8vIFRlYWNoaW5nIEhpc3RvcnlcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==