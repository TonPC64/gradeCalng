angular.module('todoApp', [])
  .controller('TodoListController', function ($scope) {
    var todoList = this
    todoList.todos = []

    $scope.unitTotal = ''
    $scope.scoreTotal = ''
    $scope.inputSub = ''
    $scope.inputUnit = '3'
    $scope.inputGrade = '4'
    $scope.hide = true

    todoList.addTodo = function () {
      todoList.todos.push({sub: $scope.inputSub,unit: $scope.inputUnit,grade: $scope.inputGrade, done: false})
      $scope.inputSub = ''
      $scope.inputUnit = '3'
      $scope.inputGrade = '4'
    }

    todoList.remaining = function () {
      var count = 0
      angular.forEach(todoList.todos, function (todo) {
        count += todo.done ? 0 : 1
      })
      return count
    }

    $scope.showGrade = function (grade) {
      if (grade == 4) return 'A'
      else if (grade == 3.5) return 'B+'
      else if (grade == 3) return 'B'
      else if (grade == 2.5) return 'C+'
      else if (grade == 2) return 'C'
      else if (grade == 1.5) return 'D+'
      else if (grade == 1) return 'D'
      else if (grade == 0) return 'F'

      return ''
    }

    $scope.calGrade = function () {
      var Tscore = 0
      var Tunit = 0
      for (i = 0;i < todoList.todos.length;i++) {
        Tscore += todoList.todos[i].unit * todoList.todos[i].grade
        Tunit += todoList.todos[i].unit * 1
      }

      grade = ($scope.scoreTotal + Tscore) / ($scope.unitTotal + Tunit)

      if (grade) $scope.hide = false
      else $scope.hide = true

      return Math.floor(grade * 100) / 100
    // return Tscore + ' : ' + Tunit
    }

    todoList.archive = function () {
      var oldTodos = todoList.todos
      todoList.todos = []
      angular.forEach(oldTodos, function (todo) {
        if (!todo.done) todoList.todos.push(todo)
      })
    }
  })
